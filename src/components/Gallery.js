import React, { Component } from 'react'

export default class Gallery extends Component {
  constructor() {
    super()
    this.state = {
      loading: true,
      categorie_image: '',
      title: ''
    }
  }
  componentDidMount() {
    let { categorie_image, title } = this.props.data
    let { loading } = this.props.loading
    this.setState({
      loading,
      categorie_image,
      title
    })
    // let isLoaded = this.props.data.isLoaded

  }
  render() {
    let {categorie_image, title, loading} = this.state
    let styleGallery = {
      "background": `rgba(180, 168, 255, 0.65) url(${categorie_image}) `,
      "backgroundSize": "cover"
    }
    return (
      <>
        {!loading ?
          <div className='gallery-card' style={styleGallery}>
            <div className='gallery-content'>
              <h3 className='gallery-title'>{title}</h3>
            </div>
          </div> :
          "CARGANDO..."}
      </>

    )
  }
}
