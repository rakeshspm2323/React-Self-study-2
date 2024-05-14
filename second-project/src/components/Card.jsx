import React from 'react'

const Card = (props) => {
    // console.log(props);
    // console.log(props.myObj);
    // console.log(props.myObj.name);
    // console.log(props.myObj.age);
    // console.log(props.myObj.city);
    // console.log(props.myObj.state);

    // let {myObj,user} = props
    // console.log(myObj.name);
    // console.log(myObj.age);

    let {userName,btnText} = props
  return (
   
         <div className="relative h-[400px] w-[300px] rounded-md mb-5">
              <img src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
              className="z-0 h-full w-full rounded-md object-cover"/>
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-left">
                  <h1 className="text-lg font-semibold text-white">{userName}</h1>
                  <p className="mt-2 text-sm text-gray-300">{userName} is an Indian actress, producer, and director who works in Hindi films. 
                  She has directed various advertisements and has also been featured in several music videos.</p>
                  <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">{btnText}</button>
            </div>
        </div> 
  )
}

export default Card
