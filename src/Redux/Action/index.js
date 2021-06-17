

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
  export const Edit =(name,date,to ,from,time,id)=>{
    return {
      type:"EDIT",
      id,
    payload:{
           name:name,
           date:date,
           to:to,
           from:from,
           time:time   
    },
  };
  };

