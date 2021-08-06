import React,{Component} from 'react';
import ApiService from '../../ApiService';

import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import CreateIcon from '@material-ui/icons/Create'
import DeleteIcon from '@material-ui/icons/Delete'



class DataList extends Component{
    constructor(props){
        super(props);
        
        this.state= {
            list : [],
            message : null
        }
    }
    componentDidMount(){
        this.reloadDataList();
    }

    reloadDataList = () =>{
        ApiService.fetchList()
        .then(res => {
            this.setState({
                list : res.data
            })
        })
        .catch(err => {
            console.log("reloadList() Error", err);
        })
    }
    deleteList = (dbSeq) =>{
        ApiService.deleteList(dbSeq)
        .then(res => {
            this.setState({
                message : 'List Delete Success.'
            });
            this.setState({
                list : this.setState.list.filter( data =>
                    data.seq !== dbSeq)
            });
        })
        .catch(err =>{
            console.log('deleteList() Error.', err);
        })
    }
    render(){
        return(
            <div>
                <Typography variant="h4" style ={style}>Crud Board</Typography>
                <Button variant="contained" color ="primary">Add List</Button>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>번호</TableCell>
                            <TableCell align="right">제목</TableCell>
                            <TableCell align="right">작성일</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.list.map( dbdata=>
                            <TableRow key = {dbdata.seq}>
                                <TableCell component="th" scope = "dbdata">{dbdata.seq}</TableCell>
                                <TableCell align="right">{dbdata.title}</TableCell>
                                <TableCell align="right">{dbdata.date}</TableCell>
                                <TableCell align="right" onClick ={ ()=> this.deleteList(dbdata.seq)}>
                                    <DeleteIcon />
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        );
    }
}

const style = {
    display : 'flex',
    justifyContent : 'center'
}
export default DataList;