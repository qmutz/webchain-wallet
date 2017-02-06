import React from 'react';
import { connect } from 'react-redux'
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table'
import log from 'loglevel'
import Immutable from 'immutable'

import Account from './account'

const Render = ({accounts}) => {

    const shortStyle = { width: 12 };
    const wideStyle = { width: 120 };

    var table = <Table selectable={false}>
        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow>
                <TableHeaderColumn style={wideStyle}>Account</TableHeaderColumn>
                <TableHeaderColumn style={shortStyle}>Balance</TableHeaderColumn>
            </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false}>
            {accounts.map( (account) => <Account key={account.get('id')} account={account}/>)}
        </TableBody>
    </Table>;

    return (
        <div id="accounts-list">
            <h2>Accounts</h2>
            {table}
        </div>
    )
};

const AccountsList = connect(
    (state, ownProps) => {
        return {
            accounts: state.accounts.get('accounts', Immutable.List()),
        }
    },
    (dispatch, ownProps) => {
        return {}
    }
)(Render);

export default AccountsList