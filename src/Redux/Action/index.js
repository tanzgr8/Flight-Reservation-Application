export const Add= (name,date,to ,from,time)=>{
   return {
        type:"ADD",
        payload :{
            id: new Date().getTime().toString(),
            name:name,
            date:date,
            to:to,
            from:from,
            time:time    
        },
};
};
export const Delete = (id) => {
    return {
      type: "DELETE",
      id,
    };
  }; 
  