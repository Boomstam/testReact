export function Note(props){
    const {noteHolder} = props;
    if(noteHolder.note){
        return <div className="note">{noteHolder.note}</div>;
    }
    return null;
}