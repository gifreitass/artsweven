"use client"
import useCategoryList from "@/hooks/useCategoryList"
import postCreateProduct from "@/services/api/postCreateProduct"
import putProduct from "@/services/api/putProduct"
import { zodResolver } from "@hookform/resolvers/zod"
import MDEditor from "@uiw/react-md-editor"
import { useParams } from "next/navigation"
import { useRouter } from "next/navigation"
import { Controller, useForm } from "react-hook-form"
import Select from 'react-select'
import toast from "react-hot-toast"
import * as z from 'zod'
import postCreateProductCategory from "@/services/api/postCreateProductCategory"
import deleteProductCategory from "@/services/api/deleteProductCategory"
import postCreateProductImage from "@/services/api/postCreateProductImage"
import { useMemo, useState } from "react"
import { URL } from "node:url"

//array de todas as categorias do produto
const formSchema = z.object({
    name: z.string().min(1, 'Campo obrigatório'),
    value: z.coerce.number().min(1, 'O valor precisa ser maior que zero'),
    description: z.string().min(1, 'Campo obrigatório'),
    image: z.any(),
    categories: z.array(z.object({ label: z.string(), value: z.string(), id: z.number() }))
})

type Schema = z.infer<typeof formSchema>

const ProductForm: React.FC<{ product?: IProduct, productId: string, category: ICategory[] }> = (props) => {
    const { product, productId, category } = props
    const params = useParams()
    const router = useRouter()
    const [previewUrl, setPreviewUrl] = useState<string>()

    //popula o seletor de categorias
    const { categories } = useCategoryList()
    const categoriesOptions = categories.map((category) => {
        return { value: category.name, label: category.name, id: category.id }
    })

    const defaultCategories = category.map((category) => {
        return { value: category.name, label: category.name, id: category.id }
    })

    const { register, handleSubmit, control, watch, formState: { errors } } = useForm<Schema>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: product?.name,
            value: product?.value,
            description: product?.description,
            image: product?.image,
            categories: defaultCategories
        },
    })

    const imageFile = watch('image')

    // const imagePreviewUrl = useMemo(() => {
    //     if (imageFile) {
    //         const url = window.URL.createObjectURL(imageFile)
    //     }
    //     return undefined
    // }, [imageFile])

    //sempre tratar o erro no componente
    const submitForm = async (data: Schema) => {
        // novo produto - criar produto
        if (params.id === 'create') {
            try {
                const createdProduct = await postCreateProduct({
                    name: data.name,
                    description: data.description,
                    value: data.value,
                    image: data.image
                })
                const postCategories = data.categories.map((category) => {
                    return { categoryId: category.id, productId: createdProduct.id }
                })
                await Promise.all(postCategories.map(async (item) => {
                    await postCreateProductCategory(item)
                }))
                toast.success('Produto criado')
                router.push('/backoffice/products')
            } catch (error) {
                if (error instanceof Error) {
                    toast.error(error.message)
                    return
                }
                toast.error("Erro ao criar produto")
            }
            return
        }

        // produto existente - atualizar produto
        try {
            await putProduct(Number(productId), {
                name: data.name,
                description: data.description,
                value: data.value,
            })
            const formData = new FormData()
            formData.append("photo", data.image[0])
            await postCreateProductImage(formData, Number(productId))
            if (category.length > 0) {
                await deleteProductCategory(Number(productId))
            }
            const putCategories = data.categories.map((category) => {
                return { categoryId: category.id, productId: Number(productId) }
            })
            await Promise.all(putCategories.map(async (item) => {
                await postCreateProductCategory(item)
            }))
            toast.success('Produto atualizado')
        } catch (error) {
            if (error instanceof Error) {
                toast.error(error.message)
                return
            }
            toast.error("Erro ao atualizar produto")
        }
    }

    return (
        <form encType="multipart/form-data" onSubmit={handleSubmit(submitForm)} className="w-4/5 bg-white mt-10 rounded-md p-6 flex flex-col gap-3">
            <p className="text-xl font-semibold">Detalhes</p>

            {/* name input */}
            <label className="text-sm font-semibold" htmlFor="name">Nome</label>
            <input className="h-8 rounded-md border border-[#273056] p-2" {...register("name", { required: "Campo obrigatório" })} type="text" />
            {errors.name && <span className="text-sm text-red-700 font-semibold">{errors.name.message}</span>}

            {/* value input */}
            <label className="text-sm font-semibold" htmlFor="value">Valor</label>
            <input className="h-8 rounded-md border border-[#273056] p-2" {...register("value", { required: "Campo obrigatório" })} type="decimal" />
            {errors.value && <span className="text-sm text-red-700 font-semibold">{errors.value.message}</span>}

            {/* image input */}
            <label className="text-sm font-semibold" htmlFor="image">Imagem</label>
            <img className="w-32 rounded-md shadow-md" src={`http://localhost:3001/${product?.image}`} alt="product" />
            <input className="h-12 rounded-md border border-[#273056] p-2" {...register("image", { required: "Campo obrigatório" })} type="file" />
            {errors.image && <span className="text-sm text-red-700 font-semibold"></span>}

            {/* description input */}
            <p className="text-sm font-semibold">Descrição</p>
            <Controller
                name="description"
                control={control}
                rules={{ required: true }}
                render={({ field }) => <MDEditor preview="edit" value={field.value} onChange={field.onChange} />
                }
            />
            {errors.description && <span className="text-sm text-red-700 font-semibold">{errors.description.message}</span>}

            {/* category select */}
            <label className="text-sm font-semibold" htmlFor="categories">Categorias</label>
            {categories.length > 0 && <Controller
                name="categories"
                control={control}
                rules={{ required: true }}
                render={({ field }) => <Select defaultValue={field.value} onChange={field.onChange} isMulti options={categoriesOptions} />} />}
            {errors.categories && <span className="text-sm text-red-700 font-semibold">{errors.categories.message}</span>}

            <button type="submit" className="mt-4 w-fit flex items-center gap-2 bg-[#273056] px-4 py-2 rounded-md text-white font-medium">Salvar alterações</button>
        </form>
    )
}

export default ProductForm