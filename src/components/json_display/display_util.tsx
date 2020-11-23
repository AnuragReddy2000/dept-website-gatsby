import React, { ReactElement } from "react"

function create_json_display(input: any,schema: Object, changeState:()=>void): ReactElement {
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
            if(typeof val === "string"){
                output.push(<div style={{display:"flex", flexDirection:"row", margin:"10px", padding:"6px"}}>
                    <div>{key as string + " : "}</div>
                    {getTextElement(val,(new_text:string)=>{json[key as keyof Object] = new_text as any})}
                </div>)
            } else {
                output.push(<div style={{display:"flex", flexDirection:"row", margin:"10px",padding:"6px"}}>
                    <div>{key as string + " : "}</div>
                    {create_json_display(val,schema[key as (keyof Object)],changeState)}
                </div>)
            }
        }
    }
    return <div style={{margin:"4px", padding:"4px", border:"1px solid rgb(170, 170, 170)"}}>{output as ReactElement[]}</div> as ReactElement
}

function getTextElement(def_text: string, onChange:(new_text: string)=>void):ReactElement {
    const text_len = 60
    let output: any
    if(def_text.length > text_len){
        output = <textarea defaultValue={def_text} cols={text_len} rows={def_text.length/text_len + 1} onChange={(event) => {onChange(event.target.value)}} style={{marginLeft:"10px",fontFamily:"sans-serif"}}></textarea>
    } else {
        output = <textarea defaultValue={def_text} cols={def_text.length} rows={1} onChange={(event) => {onChange(event.target.value)}} style={{marginLeft:"10px",fontFamily:"sans-serif"}}></textarea>
    }
    return output as ReactElement
}

function arrayElement(array:any[], element: any, index: number,schema: Object, changeState:()=>void): ReactElement{
    let output = <div style={{marginLeft:"4px", display:"flex", flexDirection:"row", justifyContent:"flex-end", alignItems:"center"}}>
        <div style={{width:"100%"}}>
            {(typeof element ==="string") ? getTextElement(element,(new_text:string)=>{array[index] = new_text as any}) : create_json_display(element,schema,changeState)}
        </div>
        <button style={{marginLeft:"3px"}} title="Remove this entry" onClick={()=>{if(confirm("Are you sure you want to remove this field?")){delete array[index];changeState()}}}>x</button>
    </div>
    return output as ReactElement
}

export default create_json_display