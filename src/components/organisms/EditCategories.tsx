"use client"
import useCategoryList from "@/hooks/useCategoryList"
import deleteCategory from "@/services/api/deleteCategory"
import postCreateCategory from "@/services/api/postCreateCategory"
import React, { useState } from "react"
import toast from "react-hot-toast"

const EditCategories = () => {
    const [categoryName, setCategoryName] = useState<string>('')
    const { categories, fetch } = useCategoryList()

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCategoryName(event.target.value)
    }

    const clickCreateCategory = async (category: string) => {
        try {
            const createdCategory = await postCreateCategory({
                name: category,
                enabled: true
            })
            setCategoryName('')
            toast.success('Categoria criada')
            fetch()
        } catch (error) {
            if (error instanceof Error) {
                toast.error(error.message)
                return
            }
            toast.error("Erro ao criar categoria")
        }
    }

    const clickDeleteCategory = async (categoryId: number) => {
        try {
            await deleteCategory(categoryId)
            toast.success('Categoria deletada')
            fetch()
        } catch (error) {
            if (error instanceof Error) {
                toast.error(error.message)
                return
            }
            toast.error("Erro ao deletar categoria")
        }
    }

    return (
        <div className="w-1/2">
            <div className="flex flex-col gap-3">
                <label className="font-semibold" htmlFor="category">Nova Categoria</label>
                <div className="flex gap-3 items-center">
                    <input value={categoryName} onChange={handleChange} name="category" type="text" className="w-full h-8 rounded-md border border-[#273056] p-2" />
                    <img onClick={() => clickCreateCategory(categoryName)} className="w-7 h-7 cursor-pointer" src="/images/addButton.png" alt="add icon" />
                </div>
            </div>
            <div className="gap-4 mt-6 grid grid-cols-2">
                {categories && categories.map((category, index) => {
                    return <div key={index} className="bg-gray-300 rounded-md p-3 flex justify-between shadow-md"><p>{category.name}</p>
                        <img onClick={() => clickDeleteCategory(category.id)} className="w-5 h-5 cursor-pointer" src="/images/delete.png" alt="trash icon" />
                    </div>
                })}
            </div>
        </div>
    )
}

export default EditCategories