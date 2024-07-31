import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import SearchDynamicProduct from '../redux/slices/SearchDynamicProduct'

export const SearchProduct = () => {
    const params = useParams()
    const dispatch=useDispatch();
    const {data,loading}= useSelector((state)=> state?.searchDynamicProduct)
    React.useEffect(()=>{
        dispatch(SearchDynamicProduct(params?.id));


    }, [params?.id])

    console.log("searchdata", data)
    console.log("searchloading",loading)
  return (
    <div>SearchProduct</div>
  )
}
