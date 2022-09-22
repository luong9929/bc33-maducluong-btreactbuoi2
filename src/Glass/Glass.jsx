import React, { Component } from 'react'
let dataGlass = [
  
  {
      "id": 1,
      "price": 30,
      "name": "GUCCI G8850U",
      "url": "./glassesImage/v1.png",
      "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
  },
  {
      "id": 2,
      "price": 50,
      "name": "GUCCI G8759H",
      "url": "./glassesImage/v2.png",
      "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
  },
  {
      "id": 3,
      "price": 30,
      "name": "DIOR D6700HQ",
      "url": "./glassesImage/v3.png",
      "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
  },
  {
      "id": 4,
      "price": 70,
      "name": "DIOR D6005U",
      "url": "./glassesImage/v4.png",
      "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
  },
  {
      "id": 5,
      "price": 40,
      "name": "PRADA P8750",
      "url": "./glassesImage/v5.png",
      "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
  },
  {
      "id": 6,
      "price": 60,
      "name": "PRADA P9700",
      "url": "./glassesImage/v6.png",
      "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
  },
  {
      "id": 7,
      "price": 80,
      "name": "FENDI F8750",
      "url": "./glassesImage/v7.png",
      "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
  },
  {
      "id": 8,
      "price": 100,
      "name": "FENDI F8500",
      "url": "./glassesImage/v8.png",
      "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
  },
  {
      "id": 9,
      "price": 60,
      "name": "FENDI F4300",
      "url": "./glassesImage/v9.png",
      "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
  }
]

export default class Glass extends Component {
  state ={
      glass : {
        "id": 9,
        "price": 60,
        "name": "FENDI F4300",
        "url": "./glassesImage/v9.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
      }
    
  }

  renderButton =()=>{
    return dataGlass.map((prod,index)=>{
        return <button className='btn' key={index} onClick={()=>{
          this.changeGlass(prod)
        }}>
                     <img src={prod.url} alt="" width={200} height={100} />
                  </button>
    })
  }  
  changeGlass =(prod)=>{
    this.setState({
        glass : prod
    })
  }
  render() {
    let {id,price,name,url,desc} = this.state.glass
    return (
      <div>
        <h1 className='text-center my-5'>TRY GLASS APP ONLINE</h1>
        <div className="container mt-5 model">
            <div className="row text-center ">
              <div className="col-6">
                 <div className="item">
                 <img src="./glassesImage/v7.png" alt="" />
                  <div className="text">
                      <h2>FENDI F8750</h2>
                      <p>80$</p>
                      <p>Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.</p>
                  </div>
                 </div>
              </div>
              <div className="col-6">
                 
              <div className="item">
              <img src={url} alt="" />
              <div className="text">
              <h2>{name}</h2>
                      <p>{price}$</p>
                      <p>{desc}</p>
              </div>
                    
                  </div>
              </div>
            </div>
        </div>
        <div className="container glass-item mt-5">
          <div className="card">
             <div className="card-body">
              
                  {this.renderButton()}
             </div>
          </div>
        </div>
      </div>
    )
  }
}
