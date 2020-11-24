import React from 'react'

interface TextAreaProps{
    default_text: string,
    onChange: (new_text: string)=>void
}

class TextArea extends React.Component<TextAreaProps>{

    componentWillUnmount(){
        console.log("component will unmount" + "text:" + this.props.default_text)
    }

    componentDidMount(){
        console.log("component did mount, text:" + this.props.default_text)
    }

    shouldComponentUpdate(){
        return true
    }

    render(){
        const text_len = 55
        return(
            <div >
                <textarea id={this.props.default_text} defaultValue={this.props.default_text} cols={Math.min(text_len,this.props.default_text.length)} rows={this.props.default_text.length/text_len + 1} onChange={(event) => {this.props.onChange(event.target.value)}} style={{marginLeft:"10px",fontFamily:"sans-serif"}}></textarea>
            </div>
        )
    }
}

export default TextArea