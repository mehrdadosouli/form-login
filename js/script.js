const getparams=(key)=>{
    const getUrl=new URLSearchParams(window.location.search);
    return getUrl.get(key);
}


  export {getparams}