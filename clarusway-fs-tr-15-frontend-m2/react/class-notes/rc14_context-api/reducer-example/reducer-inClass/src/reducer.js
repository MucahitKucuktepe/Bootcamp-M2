export const initialState={
    loading:false,
    catImage:"",
    error:"",
}

export const reducer =(initialState, action)=>{
switch (action.type) {
    case "START":
        return {...initialState, loading:true}
     ;
    case "SUCCESS":
        return {...initialState, catImage:action.payload, loading:false, error:"",}
     ;
    case "SUCCESS":
        return {...initialState, catImage:action.payload, loading:true, error:"",}
     ;
    case "FAİL":
        return {...initialState, catImage:"", loading:true, error:action.payload}
     ;

    default:
      return initialState
}
}