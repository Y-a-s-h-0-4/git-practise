export default function Docs({ params }: { params: { slug: string[] } }) {
    return (
        <div>Docs { params.slug[1] }</div>
    )
}