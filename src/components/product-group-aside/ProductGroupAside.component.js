import {useEffect} from 'react'
import {makeStyles} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
   container: {
       display: 'flex',
       flexDirection: 'column',
       alignItems:'flex-end'
   },
   groupTitle:{
       marginTop:theme.spacing(7),
       marginBottom:theme.spacing(3),
       textAlign:'right',
       color:'var(--russian-violet)'
   },
   groupCategory:{
       width:'80%'
   },
   subGroupTitle:{
    textAlign:'right',
    color:'var(--lavender-floral)'
   }
}));

function ProductsGroupAside(props){
    const classes = useStyles();

    useEffect( async ()=>{
        console.log(props.groups)
    }, [props.groups])

    return (
        <section className={classes.container}>
            {
                props.groups.map(group=>{
                    const {groupId:id, products, group:name} = group
                    return <article className={classes.groupCategory} key={id}>
                        <h1 className={classes.groupTitle}>{name}</h1>
                        {products.map(prod=>{
                            const {name, id:prodId} = prod
                            return (<h3 className={classes.subGroupTitle} key={prodId}>{name}</h3>)
                        })}
                    </article>
                })
            }
        </section>
    )
}

export {
    ProductsGroupAside
}