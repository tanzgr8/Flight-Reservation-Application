

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
  export const Edit =(name1,date1,to1 ,from1,time1,id)=>{
    return {
      type:"EDIT",
      id,
    payload:{
           name1:name1,
           date1:date1,
           to1:to1,
           from1:from1,
           time1:time1   
    },
  };
  };

