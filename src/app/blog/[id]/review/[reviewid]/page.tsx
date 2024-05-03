export default function Review({ params }: { params: { id: string, reviewid: string } }) {
    return (<div>
        <div>Review { params.reviewid }</div>
        <div>Blog { params.id }</div>
        </div>
    )
}