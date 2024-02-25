
import React from 'react';
import '../App.css'

const UserDetails = ({ user }) => {
    return (
        <div className="card">
            <div className='img-div'>
                <img width={'100px'} height={'100px'} src={user.avatar_url} alt="" />
            </div>
            <div>
                <div>
                    <div className='username'>{user.login}</div>
                </div>
                <div className='user-data'>
                    <div className='type'>{user.type}</div>
                    <div className='mini-box'>
                        <div>
                            <div className='mini-heading'>Following</div>
                            <div>{user.following}</div>
                        </div>
                        <div>
                            <div className='mini-heading'>Followers</div>
                            <div>{user.followers}</div>
                        </div>
                        <div>
                            <div className='mini-heading'>Repository</div>
                            <div>{user.public_repos}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDetails;

