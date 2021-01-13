import React from 'react';

function Italian(props) {
    return (
        <div>
        <section style={{
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            marginTop:'30vh'
        }}>
        </section>
            <h3>Italian</h3>
            <ul className="list-group">
                <li className="list-group-item">Pasta</li>
                <li className="list-group-item">Lasagne</li>
                <li className="list-group-item">Chips</li>
            </ul>
        </div>
    );
}

export default Italian;