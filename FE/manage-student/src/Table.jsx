import React from 'react';
import ReactTable from 'react-table';
import withFixedColumns from 'react-table-hoc-fixed-columns';
import 'react-table-hoc-fixed-columns/lib/styles.css' // important: this line must be placed after react-table css import
import columnFixedConst from './ColumnConst.jsx';
import "react-table/react-table.css";
import '../css/Table.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faTrash, faPencilAlt } from '@fortawesome/free-solid-svg-icons'

const ReactTableFixedColumns = withFixedColumns(ReactTable);

class Table extends React.Component {
    constructor(props) {
        super(props);
        this.renderFixedColumn = this.renderFixedColumn.bind(this);
        this.renderFixedSubColumn = this.renderFixedSubColumn.bind(this);
        this.renderInfo = this.renderInfo.bind(this);
        this.renderAction = this.renderAction.bind(this);
    }

    renderAction = () => {
        return [
            {
                Header: () => <span className='custom-subcolumn-info'>Action</span>,
                accessor: 'col-action',
                width: 90,
                Cell: () => <React.Fragment>
                    <span className='action'>
                        <FontAwesomeIcon icon={faEye} />
                    </span>
                    <span className='action'>
                        <FontAwesomeIcon icon={faPencilAlt}/>
                    </span>
                    <span className='action'>
                        <FontAwesomeIcon icon={faTrash}/>
                    </span>
                </React.Fragment >
            }
        ]
    }

    renderInfo = info => {
        const cellName = info.column.id;
        const data = info.original[cellName];
        return <span>{data}</span>
    }

    renderFixedColumn = () => {
        const fixedColumns = [
            {
                Header: '',
                fixed: 'left',
                width: 400,
                columns: this.renderAction()
            },
            {
                Header: columnFixedConst.column_info,
                fixed: 'left',
                width: 600,
                columns: this.renderFixedSubColumn(columnFixedConst.sub_column_info)
            }
        ];
        return fixedColumns;
    }

    renderFixedSubColumn = (subcolumn) => {
        const subcolumnfixed = subcolumn.map(col => {
            return {
                Header: () => <span className='custom-subcolumn-info'>{col.name}</span>,
                accessor: col.name,
                width: 200,
                Cell: this.renderInfo
            }
        });
        return subcolumnfixed;
    }

    render() {
        const { data } = this.props;
        return (
            <ReactTableFixedColumns
                data={data}
                minRows={3}
                columns={this.renderFixedColumn()}
                sortable={false}
            />
        );
    }
}

export default Table;