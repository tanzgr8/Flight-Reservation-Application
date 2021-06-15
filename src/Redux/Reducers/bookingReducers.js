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
              default:
                return state;
            }

    };
    export default bookingReducers;
