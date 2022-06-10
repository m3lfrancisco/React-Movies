export default function ActorCard({actor}) {
    return (
        <div style={{"background": `url(https://images.unsplash.com/photo-1540320865252-e4abf9e80004?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80) no-repeat center center`, "WedkitBackgroundSize": "cover"}} className="actor-card">
            <div className="actor-name">
                <h1>{actor}</h1>
            </div>
        </div>
    )
}