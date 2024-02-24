import { useEffect } from "react";
import { useState } from "react";
import DataTable from "react-data-table-component";

const Table_Component = ()=>{

    const columns = [
         {
            name : "Sr. No",
            selector : (row)=>row.id
         },
         {
            name : "Title",
            selector : (row)=>row.title
         },
         {
            name : "Category",
            selector : (row)=>row.category
         },
         {
            name : "Price",
            selector : (row)=>row.price
         },
         {
            name : "Image",
            selector : (row)=><img height={70} width={80} src={row.image}/>
         },
         {
            name:"Action",
            cell:(row)=>(
                <button onClick={()=>handleClick(row.id)}>Delete</button>
            )
         }
    ]

    const [data , setData] = useState([])
    const [search , setSearch] = useState("")
    const [filter , setFilter] = useState([])

    const getProduct = async()=>{
        try{
            const request = await fetch("https://fakestoreapi.com/products")
            const data = await request.json()
            console.log(data,"Data");
            setData(data)
            setFilter(data)
        }
        catch{
            console.log(error);
        }
    }

    useEffect(()=>{
        getProduct()
    },[])

    useEffect(()=>{
        const result = data.filter((items)=>{
            return items.title.toLowerCase().match(search.toLocaleLowerCase())
        })
        setFilter(result)
    },[search])

    const handleClick = (val)=>{
        const newData = data.filter((items)=> items.id != val)
        setFilter(newData)
    }

    const tableheaderStyle = {
        headCells:{
            style:{
                fontWeight :"bold",
                fontSize : "14px",
                backgroundColor : "#96EFFF"
            }
        }
    }

    return(
        <>
        <h1 className="text-center">This is Product List</h1>
        <div className="container">
            <div className="row">
                <div className="col-md-12 h-100vh">
                    <DataTable
                        columns={columns}
                        customStyles={tableheaderStyle}
                        data={filter}
                        pagination // pagination ho jayega
                        selectableRows // row select hoga
                        fixedHeader // scroll karne ke bad Header fix rahega 
                        selectableRowsHighlight
                        highlightOnHover // onHover 
                        actions={
                            <button>Export PDF</button>
                        }
                        subHeader
                        subHeaderComponent={
                            <input type="text"
                            placeholder="Type something"
                            className="w-25 form-control"
                            value={search}
                            onChange={(e)=> setSearch(e.target.value)}
                            />
                        }
                        subHeaderAlign="center"
                    />
                </div>
            </div>
        </div>
        </>
    )
}

export default Table_Component;
