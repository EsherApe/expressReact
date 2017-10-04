import React from 'react';
import 'whatwg-fetch';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.searchUser = this.searchUser.bind(this);
        this.state = {
            users: null
        }
    }

    searchUser() {
        let data = {
            login: this.refs.searchUserLogin.value
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
            console.log(resp);
            this.setState({users: resp})
        }).catch(err => console.error(err));
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
                                    <label className='form-label' htmlFor='search-user-name'>Login</label>
                                </div>
                                <div className='col-9'>
                                    <input className='form-input' type='text'
                                           id='search-user-name'
                                           placeholder='Name'
                                           ref='searchUserLogin'
                                           onChange={this.searchUser}
                                    />
                                </div>
                            </div>
                            {this.state.users ? this.state.users.map(user => {
                                return (
                                    <span key={user.id}>{user.firstName} {user.lastName}</span>
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
                            <hr/>
                        </div>
                        <div className='panel-footer'>
                            <button className='btn btn-primary' type='submit'>Search</button>
                            <button className='btn btn-link' type='reset'>Cancel</button>
                        </div>
                    </div>
                </form>
            </section>
        )
    }
}

export default Search;