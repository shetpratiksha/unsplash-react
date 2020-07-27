import React, { Component } from 'react'
import Search from './Search';
import ImageList from './ImageList';
import axios from 'axios';


const API_KEY = process.env.REACT_APP_API_KEY;

class Home extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            totalPhotos: 0,
            searchText: '',
            images: [],
            visible: 9,
            error: false
        }
        this.loadMore = this.loadMore.bind(this);
    }
    
    loadMore() {
        this.setState((prev) => {
          return {visible: prev.visible + 9};
        });
    } 

    imageSearch(term){
        if(term == ''){
            this.fetchImages()
        }
        else{
            const { visible, currentPage } = this.state
            axios.get('https://api.unsplash.com/search/photos', { 
                params: {
                    per_page: visible,  
                    page: currentPage,
                    query:term
                    },
                headers: { Authorization: `Client-ID ${API_KEY}`}
              
            })
            .then(res =>{
                this.setState({
                    images: res.data.results,
                    totalPhotos:parseInt(res.headers['x-total']),
                    currentPage:currentPage,
                    searchText:term
                })
            })
            .catch(err =>{
                console.log(err)
            })
        }
    }

    fetchImages(){
 
        const { currentPage, visible, searchText} = this.state
        axios.get('https://api.unsplash.com/photos', { 
            headers: { Authorization: `Client-ID ${API_KEY}`},
            params: {per_page: visible,  page: currentPage}
            
        })
        .then(res =>{
            console.log(res)
            this.setState({
                images: res.data,
                totalPhotos:parseInt(res.headers['x-total']),
                currentPage:currentPage
            })
        })
        .catch(err =>{
            console.log(err)
        })
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.visible !== this.state.visible){
            this.fetchImages();
        }
        
    }

    componentDidMount(){
       this.fetchImages();
    }
    
    render() {
        const {images, visible, totalPhotos } = this.state
        return (
            <div className="unsplash-conatiner"> 
            {/* {this.state.totalPhotos} */}
                <h1 className="head-white">Search<span>it</span></h1>
                {/* <p className="para-tag-1">Free sock photos for everything</p>
                <p className="para-tag-2">We offer the best free stock photo's all in one place</p>
                <p className="para-tag-3">Search by tags:</p> */}
                <Search onSearchTermChange={searchTerm => this.imageSearch(searchTerm)}/>
                <ImageList images={images} visible={visible}/>
                { visible < totalPhotos &&
                    <div className="btn-wrapper">
                        <button onClick={this.loadMore} type="button" className="load-more">Load more</button>
                    </div>
                }
            </div>
        )
    }
}

export default Home
