const initial={
    list:[]
} ;
const bookingReducers =(state=initial,action)=>{
    switch(action.type){
        case "ADD":
            const {id,name,date,to,from,time}= action.payload;
            return{
                ...state,
                list:[
                    ...state.list,
                    {
                        id:id,
                        name:name,
                        date:date,
                        to:to,
                        from:from,
                        time:time
                    },
                ],
            };
            case "DELETE":
                const newlist = state.list.filter((elem) => elem.id !== action.id);
                return {
                  ...state,
                  list: newlist,
                };
            case "EDIT":
                const {name1,date1,to1,from1,time1}= action.payload;
                 return state.list.map((elem)=>{
                    if(elem.id===action.id){
                        return {
                            id:action.id,
                            name:name1,
                            date:date1,
                            to:to1,
                            from:from1,
                            time:time1
                        };
                    }
                    return elem;
                });
                
              default:
                return state;
            }

    };
    export default bookingReducers;
