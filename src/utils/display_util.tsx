import React from "react"
import TextArea from "../components/textarea/textarea"
import { v4 as uuidv4 } from 'uuid';

function create_json_display(input: any,schema: Object, changeState:()=>void): JSX.Element {
    let output: any[] = []

    if (Array.isArray(input)){
        let json = input as any[]
        let new_element = schema as any[]
        output.push(<div style={{display:"flex", flexDirection:"column", margin:"4px", justifyContent:"flex-start", alignItems:"stretch"}}>
            {json.map((each,index) => arrayElement(json,each,index,new_element[0],changeState))}
            <button style={{marginLeft:"10px", width:"100px"}} title="Add a new entry" onClick={()=>{json.push(JSON.parse(JSON.stringify(new_element[0])));changeState()}}>Add new</button>
        </div>)
    }else{
        let json = input as object 
        let val: any
        for (const key in json){
            val = json[key as (keyof Object)]
            output.push(<div style={{display:"flex", flexDirection:"row", margin:"10px", padding:"6px"}}>
                <div>{key as string + " : "}</div>
                {(typeof val ==="string")? <TextArea key={uuidv4()} default_text={val} onChange={(new_text:string)=>{json[key as keyof Object] = new_text as any}}/>
                    : create_json_display(val,schema[key as (keyof Object)],changeState)}
            </div>)
        }
    }
    return <div style={{margin:"4px", padding:"4px", border:"1px solid rgb(170, 170, 170)"}}>{output as JSX.Element[]}</div> as JSX.Element
}

function arrayElement(array:any[], element: any, index: number,schema: Object, changeState:()=>void): JSX.Element{
    let output = <div style={{marginLeft:"4px", marginBottom:"3px", display:"flex", flexDirection:"row", justifyContent:"flex-end", alignItems:"center"}}>
        <div style={{width:"100%"}}>
            {(typeof element ==="string") ? <TextArea key={uuidv4()} default_text={element} onChange={(new_text:string)=>{array[index] = new_text as any}}/> 
                : create_json_display(element,schema,changeState)}
        </div>
        <div style={{display:"flex", flexDirection:"column", justifyContent:"center"}}>
            <button style={{marginLeft:"3px"}} title="Remove this entry" onClick={()=>{array.splice(index,0,JSON.parse(JSON.stringify(schema)));changeState()}}>+</button>
            <button style={{marginLeft:"3px"}} title="Remove this entry" onClick={()=>{if(confirm("Are you sure you want to remove this field?")){array.splice(index,1);changeState()}}}>x</button>
        </div>
    </div>
    console.log("AE output:" + output)
    return output as JSX.Element
}

export default create_json_display