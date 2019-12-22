import React from 'react';
import Header from './Header.jsx';
import Table from './Table.jsx';
import Service from './Service.jsx';
import MappingHelper from './MappingHelper.jsx';

class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
        this.handleAddNew = this.handleAddNew.bind(this);
    }

    handleAddNew = (model) => {
        const { data } = this.state;
        const newData = [...data, model];
        this.setState({ data: newData });
    }

    componentDidMount = () => {
        (async () => {
            const data = await Service.getAll();
            const model = MappingHelper.MappingResponseToModel(data);
            this.setState({ data: model }, console.log(model));
        })()

    }

    render() {
        const { data } = this.state;
        return (
            <div className="container-fluid">
                <Header onAddNew={this.handleAddNew} />
                <div className='strip-table-student'>
                    <Table data={data} />
                </div>
            </div>
        );
    }
}

export default Layout;