import React from 'react';
import './infoview.css';

interface InfoViewProps{
    title?: string;
    image?: string;
    info: string[];
    titleColor?: string;
    links?: {"link":string,"linktext":string}[]
    rightFooter?: string;
}

class InfoView extends React.Component<InfoViewProps>{
    constructor(props: InfoViewProps){
        super(props);
    }

    render(){
        const titlecolor: string = (this.props.titleColor === undefined) ? 'black' : this.props.titleColor
        return(
            <div className='infoView'>
                {(this.props.title !== undefined) ? <p className='title' style={{color: titlecolor}}>{this.props.title}</p>: null}
                <div className={(this.props.image===undefined) ? 'noimageBox':'imageBox'}>
                    <img src={this.props.image} width='100%' height='100%'/>
                </div>
                {this.props.info.map((element, index) => <p key={index} className='content'>{element}</p>)}
                {this.props.links ? this.props.links.map(each => <p style={{alignSelf: 'flex-start', marginTop:'auto'}}><a href={each.link} target='_blank'>{each.linktext}</a></p>):null}
                {this.props.rightFooter ? <p style={{alignSelf:'flex-end'}}>{this.props.rightFooter}</p>: null}
            </div>
        )
    }
}

export default InfoView;