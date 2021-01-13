import React from 'react';

function Baked(props) {
    return (
        <div>
        <section style={{
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            marginTop:'30vh'
        }}>

        </section>
        <h3>Baked</h3>
            <ul className="list-group">
                <li className="list-group-item">Pineapple pastry</li>
                <li className="list-group-item">Chocolate Cake</li>
                <li className="list-group-item">Cookies</li>
            </ul>
        </div>
    );
}

export default Baked;