import React from 'react';
import './btech_msc.css';
import Carousel from '../../components/carousel/carousel';
import {BsDot} from 'react-icons/bs';
import {Helmet} from 'react-helmet';

interface BtechAndMScPageState{
    btech: Batch[];
    msc: Batch[];
    isLoading: boolean;
}

interface BtechAndMScPageProps{}

interface Batch{
    batch: string;
    grpImage: string;
    students: string[];
}

class BtechAndMScPage extends React.Component<BtechAndMScPageProps,BtechAndMScPageState>{

    constructor(props: BtechAndMScPageProps, state: BtechAndMScPageState){
        super(props,state);
        this.state={
            btech:[],
            msc:[],
            isLoading: true
        }
    }

    async componentDidMount(){
        const response = await fetch("/data/btech_msc.json");
        const body = await response.json() as {"btech":Batch[],"msc":Batch[]};
        this.setState({
            btech: body.btech,
            msc: body.msc,
            isLoading: false
        })
    }

    render(){
        return(
            <div className='btechAndMScPage'>
                <Helmet>
                    <title>DMath - BTech and MSc</title>
                </Helmet>
                <div style={{width: '100%', boxSizing: 'border-box', margin: '3px', padding: '5px'}}>
                    <p style={{margin: '0px', padding: '0px', color: 'darkblue', fontSize: 'x-large'}}>B.Tech and M.Sc students:</p>
                </div>
                {this.state.isLoading ? <p style={{textAlign:'center', position:'fixed', top:'50vh', color:'darkgray'}}><i>loading...</i></p> 
                : <div>
                    {this.state.btech.map(value => <div className='studentsBatch'>
                        <Carousel images={[value.grpImage]} imagesNum={1}/>
                        <div className='batchTitle'>
                            <p style={{margin: '5px', marginLeft: '20px', padding: '0px', color: 'darkblue', fontSize: 'larger'}}>{value.batch + ' Batch:'}</p>
                        </div>
                        <div className='studentsList'>
                            {value.students.map(person => <div className='studentName'><BsDot size={20}/><p style={{width:'95%'}}><i>{person}</i></p></div>)}
                        </div>    
                    </div>)}
                    {this.state.msc.map(value => <div className='studentsBatch'>
                        <Carousel images={[value.grpImage]} imagesNum={1}/>
                        <div className='batchTitle'>
                            <p style={{margin: '5px', marginLeft: '20px', padding: '0px', color: 'darkblue', fontSize: 'larger'}}>{value.batch + ' Batch:'}</p>
                        </div>
                        <div className='studentsList'>
                            {value.students.map(person => <div className='studentName'><BsDot size={20}/><p style={{width:'95%'}}><i>{person}</i></p></div>)}
                        </div>    
                    </div>)}
                </div>}
            </div>
        )
    }
}

export default BtechAndMScPage;