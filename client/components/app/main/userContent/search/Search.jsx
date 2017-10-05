import React from 'react';
import 'whatwg-fetch';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.searchUser = this.searchUser.bind(this);
        this.state = {
            users: null,
            time: null
        }
    }

    searchUser() {
        clearTimeout(this.state.time);
        let timeout = setTimeout(() => {
            if(this.refs.searchUserName.value) {
                let data = {
                    name: this.refs.searchUserName.value
                };

                fetch('user/search', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                }).then(resp => {
                    return resp.json();
                }).then(resp => {
                    this.setState({users: resp})
                }).catch(err => console.error(err));
            }
        }, 800);

        this.setState({time: timeout});
    }

    render() {
        return (
            <section className='column col-8 col-xs-12'>
                <form className='form-horizontal' action=''>
                    <div className='panel profile-panel'>
                        <div className='panel-header text-center'>
                            Search user
                        </div>
                        <div className='panel-body'>
                            <div className='form-group'>
                                <div className='col-3'>
                                    <label className='form-label' htmlFor='search-user-name'>Name</label>
                                </div>
                                <div className='col-9'>
                                    <input className='form-input' type='text'
                                           id='search-user-name'
                                           placeholder='Name'
                                           ref='searchUserName'
                                           onChange={this.searchUser}
                                    />
                                </div>
                            </div>
                            <hr/>
                            {this.state.users ? this.state.users.map((user, i) => {
                                return (
                                    <div className="tile" key={i}>
                                        <div className="tile-icon">
                                            <figure className="avatar avatar-lg">
                                                <img src={user.avatar} alt={user.firstName}/>
                                            </figure>
                                        </div>
                                        <div className="tile-content">
                                            <p className="tile-title"><a href="#">{user.fullName}</a></p>
                                            <p className="tile-subtitle text-gray">Earth's Mightiest Heroes...</p>
                                        </div>
                                        <div className="tile-action">
                                            <button className="btn btn-sm btn-primary">Join</button>
                                            <button className="btn btn-sm">Contact</button>
                                        </div>
                                    </div>
                                )
                            }) : null}
                            {/*<div className='form-group'>
                                <div className='col-3'>
                                    <label className='form-label' htmlFor='search-user-email'>Email</label>
                                </div>
                                <div className='col-9'>
                                    <input className='form-input' type='email' id='search-user-email' placeholder='Email' ref='searchUserEmail'/>
                                </div>
                            </div>
                            <div className='form-group'>
                                <div className='col-3'>
                                    <label className='form-label'>Gender</label>
                                </div>
                                <div className='col-9'>
                                    <label className='form-radio'>
                                        <input type='radio' name='searchUserGender'/>
                                        <i className='form-icon' value='male'> </i> Male
                                    </label>
                                    <label className='form-radio'>
                                        <input type='radio' name='searchUserGender'/>
                                        <i className='form-icon' value='female'> </i> Female
                                    </label>
                                </div>
                            </div>*/}

                        </div>
                        <div className='panel-footer'>
                            {/*<button className='btn btn-primary' type='submit'>Search</button>*/}
                            {/*<button className='btn btn-link' type='reset'>Cancel</button>*/}
                        </div>
                    </div>
                </form>
            </section>
        )
    }
}

export default Search;