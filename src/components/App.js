import React from 'react';
import youtube from '../api/youtube';
import VideoList from './VideoList';
import SearchBar from './SearchBar';

class App extends React.Component{
    state = {videos: [], selectedVideo: null};

     onSearchSubmit = async (term)=>{
         const response = await youtube.get('/search',{ 
                 params: {
                    q: term
              }}
             );
        this.setState({ videos: response.data.results });
     };

     render(){
         return(
             <div className='ui container'>
                 <SearchBar onSubmit={this.onSearchSubmit} />
                 <VideoList videos={this.state.videos}/>
             </div>
         );
     }
}

export default App;