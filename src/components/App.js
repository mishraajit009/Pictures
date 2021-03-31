import React from 'react';
import unsplash from '../api/unsplash';
import SearchInput from './SearchInput';
import ImageList from './ImageList';
class App extends React.Component {
    state = {images : []};
     onSearchSubmit= async (term)=>{
        const response = await  unsplash.get('/search/photos',{
        params: {query: term},
         
    });
            console.log(this);
            this.setState({images :response.data.results});
    }
        
    
    render(){
    return (
        <div className="ui container" style={{marginTop: '10px'}} >
            <SearchInput onSubmit={this.onSearchSubmit} />
            <ImageList images={this.state.images} />
        </div>);
        }
}
export default App;