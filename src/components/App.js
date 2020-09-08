import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import dailymotion from '../apis/dailymotion';

class App extends React.Component {

    state = { videos : [], selectedVideo: null, search_engine: '' };
    
    onTermSubmit = async (term, searcher) => {
        if (searcher === 'youtube') {
            const response = await youtube.get('/search', {
                params: {
                    q: term
                }
            })
            this.setState({ 
                videos: response.data.items,
                selectedVideo: null,
                search_engine: searcher
            });
        } else if (searcher === 'dailymotion') {
            const response = await dailymotion.get(`/videos?search=${term}&limit=5&fields=id%2Ctitle%2Cdescription%2Cthumbnail_240_url`)
            console.log(response.data.list);
            this.setState({ 
                videos: response.data.list,
                selectedVideo: null,
                search_engine: searcher
            });
            }
        };

    onVideoSelect = video => {
        this.setState({ selectedVideo: video });
    }

    render() {
        return ( 
            <div className="ui container"> 
                <SearchBar onFormSubmit={this.onTermSubmit}/>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} searcher={this.state.search_engine} />
                        </div>
                        <div className="five wide column">
                            <VideoList searcher={this.state.search_engine} videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App; 