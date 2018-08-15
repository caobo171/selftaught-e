import React , {Component} from 'react';
import _ from 'lodash';
import uuid from 'uuid';
import AutosizeInput from 'react-input-autosize';

let SCORE = 0

class FillTest extends Component {
   
   constructor(props){
       super(props)

       this.state={
          values:[],
          colorGreen:"",
          colorRed:"",
          typing: false,
          score:0
       }

   }

   onChange(i,e){
       this.setState({
           values:{...this.state.values, [i] : e.target.value}
       })
   }

    onSubmit(e){
       e.preventDefault();
       if(this.props.test.keys && this.state.values){
        const Data = _(this.props.test.content).split('/').value();
        _.map(Data, (data,i)=>{
             //LODASH SOLVE THE PROBLEM ABOUT COMPARE KEYS
             const KEYS =_.join(_.split(_.lowerCase(_.trim(this.props.test.keys[_.floor(i/2)])),' '),'');
             const ANSWER_VALUE = _.join(_.split(_.lowerCase(_.trim(this.state.values[i])),' '),'');
             //LODASH DONE
             if(KEYS === ANSWER_VALUE){
                 this.setState({score:this.state.score ++})
             }
        })
       }
        this.setState({
           colorGreen:"green",
           colorRed:"red",
           typing:true
       });
   }

   displayCore(){
       if(this.props.test.keys){
        return(
            <h4>{this.state.score + '/' +this.props.test.keys.length}</h4>
        )
       }
   }

   
     renderContent(){
         if(this.props.test.keys){
            const Data = _(this.props.test.content).split('/').value();
             return _.map(Data,(data,i)=>{
                 //LODASH SOLVE THE PROBLEM ABOUT COMPARE KEYS
                const KEYS =_.join(_.split(_.lowerCase(_.trim(this.props.test.keys[_.floor(i/2)])),' '),'');
                const ANSWER_VALUE = _.join(_.split(_.lowerCase(_.trim(this.state.values[i])),' '),'');
                //LODASH DONE
                 if(_.startsWith(data, '*')){
                    data= _.replace(data,'*','');
                        if(KEYS === ANSWER_VALUE){                      
                            return(
                                <AutosizeInput  
                                    style={{color:this.state.colorGreen}}
                                    className='input'
                                    key={i}          
                                    name={this.state.values[i]}
                                    placeholder = {data}
                                    onChange={(event) => {this.onChange(i, event)}}
                                    value={this.state.values[i]}
                                    readOnly={this.state.typing}
                                 />
                            )
                        }else{
                            return(
                                <AutosizeInput  
                                    style={{color:this.state.colorRed}}
                                    className='input'
                                    key={i}          
                                    name={this.state.values[i]}
                                    placeholder = {data}
                                    onChange={(event) => this.onChange(i, event)}
                                    value={this.state.values[i]}
                                    readOnly={this.state.typing}
                                 />
                            )
                        }
                    }else{
                        return(
                            <span key={uuid()}>{data}</span>
                        )
                    }}
             )} 
          else{
             console.log('fail')
         }      
    }


    render(){
        const {title} = this.props.test;
        return(
            <div className="card">
                <div className="card-content">
                    <div className="card-title">{title}</div>
                    {this.displayCore()}
                    <form onSubmit={this.onSubmit.bind(this)}>
                   {this.renderContent()}
                    <div className="card-action"> 
                        <input
                            type="submit"
                            className="btn teal"
                            value="Submit"
                        />
                    </div>
                    </form>
                   
                </div>
               </div>
        )
    }
}

export default FillTest;