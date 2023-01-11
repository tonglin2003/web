import React from 'react';
import ReactDOM from 'react-dom'; 

function BriefBio() {
    return (
        <>
      <div class="container">
    <h1 class="display-4">Brief Client Bio</h1>
    <img class="img-fluid" src="https://i.ibb.co/FsZ7g03/Pexels-photo-269077.jpg"/>
     <div class="col order-5">
      <p>
Their slogan etc. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu volutpat odio facilisis mauris sit amet. Orci a scelerisque purus semper eget. Non sodales neque sodales ut. Tellus at urna condimentum mattis pellentesque id nibh tortor. Tellus mauris a diam maecenas. Phasellus vestibulum lorem sed risus ultricies tristique. Sit amet porttitor eget dolor morbi non ar </p>
  </div>
</div>
      
      <div class="card text-center">
        <div class="card-header">
          Connections Made Possible by Justworks
        </div>
        <div class="card-body">
          <h5 class="card-title">Name of Client</h5>
          <p class="card-text">Their slogan etc. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu volutpat odio facilisis mauris sit amet. Orci a scelerisque purus semper eget. Non sodales neque sodales ut. Tellus at urna condimentum mattis pellentesque id nibh tortor. Tellus mauris a diam maecenas. Phasellus vestibulum lorem sed risus ultricies tristique. Sit amet porttitor eget dolor morbi non arcu risus quis. Volutpat est velit egestas dui. Non nisi est sit amet facilisis magna etiam tempor orci. Mauris a diam maecenas sed enim ut sem viverra. Nec nam aliquam sem et tortor consequat id. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec. Et malesuada fames ac turpis egestas integer. In est ante in nibh mauris. Adipiscing at in tellus integer feugiat. Gravida rutrum quisque non tellus orci ac auctor. In eu mi bibendum neque egestas congue quisque. Neque aliquam vestibulum morbi blandit cursus risus at ultrices.</p>
          <a href="#" class="btn btn-primary">Link to full profile</a>
        </div>
        <div class="card-footer text-muted">
        Founded in 2022
        </div>
      </div>
        
      <div class="row">
        <div class="col-sm-6">
          <div class="card">
            
            <div class="card-body">
              <h5 class="card-title">Jane Doe</h5>
              <img class="img" src="https://i.ibb.co/6XTFThK/Screen-Shot-2023-01-10-at-9-52-56-AM.png" alt="Card image cap"></img>
              <p class="card-text">"Personal quote"</p>
              <a href="#" class="btn btn-primary">Learn More</a>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">John Doe</h5>
              <img class="img" src="https://i.ibb.co/zZ0Yy1N/Screen-Shot-2023-01-10-at-10-16-03-AM.png" alt="Card image cap"></img>
              <p class="card-text">Personal Quote</p>
              <a href="#" class="btn btn-primary">Learn More</a>
            </div>
          </div>
        </div>
      </div>


<div class="container">
  <div class="row">
    <div class="col align-self-start">
    <img class="img-fluid" src="https://i.ibb.co/Wsr9wjX/Pexels-photo-1681010.jpg"/>
    </div>
    <div class="col align-self-center">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu volutpat odio facilisis mauris sit amet. Orci a scelerisque purus semper eget. Non sodales neque sodales ut. Tellus at urna condimentum mattis pellentesque id nibh tortor. Tellus mauris a diam maecenas. Phasellus vestibulum lorem sed risus ultricies tristique. Sit amet porttitor eget dolor morbi non arcu risus quis. Volutpat est velit egestas dui. Non nisi est sit amet facilisis magna etiam tempor orci. Mauris a diam maecenas sed enim ut sem viverra. Nec nam aliquam sem et tortor consequat id. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec. Et malesuada fames ac turpis egestas integer. In est ante in nibh mauris. Adipiscing at in tellus integer feugiat. Gravida rutrum quisque non tellus orci ac auctor. In eu mi bibendum neque egestas congue quisque. Neque aliquam vestibulum morbi blandit cursus risus at ultrices.
    </div>
    <div class="col align-self-end">
    <img class="img-fluid" src="https://i.ibb.co/7SxWmpX/Pexels-photo-14917591.jpg"/>
    </div>
  </div>
</div>
      </>
    )
  }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BriefBio />);
            
export default BriefBio;
