import styles from './youtube.module.css';

/* eslint-disable-next-line */
export interface YoutubeProps {
  title:string, 
  uid:string,

}

export function Youtube(props: YoutubeProps) {
  return (
    <div className={styles['container']}>
     <iframe
     title={props.title}
     src={`https://youtube.com/embed/${props.uid}`}
     width="100%"
     height={"500px"} />

    </div>
  );
}

export default Youtube;
