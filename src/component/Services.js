import React, { Component } from 'react'
import Title from './Title'
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa'
export default class Services extends Component {
    state={
        services:[
            {
            icon:<FaCocktail/>,
            title:"Putting smiles on " ,
            info: "product the people like it so much kamilois the love of the world enjoy"
            },
            {
                icon:<FaHiking/>,
                title:"Providing food" ,
                info: "product the people like it so much kamiloisthe love of the world enjoy"
                },

                {
                    icon:<FaShuttleVan/>,
                    title:"Transpotation" ,
                    info: "product the people like it so much kamilois the love of the world enjoy"
                    },

                    {
                        icon:<FaBeer/>,
                        title:"Farming technology" ,
                        info: "product the people like it so much kamilois the love of the world enjoy"
                        }
        ]
    }
  render() {
    return (
      <section className="services">
        <Title title="services"/>
        <div className="services-center">
        {
            this.state.services.map((item,index)=>{
                return <article key={index} className="services">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
                </article>
            })
        }
        </div>
      </section>
    )
  }
}
