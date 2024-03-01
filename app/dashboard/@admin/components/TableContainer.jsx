
import PropTypes from 'prop-types';
import { getStatusColor } from '@lib/utils';
import { searchForTerm, pagination } from '@lib/utils'
import TableSearch from './TableSearch';
import TableFilter from './TableFilter';
import TableActionBtn from './TableActionBtn';
import TablePagination from './TablePagination';

const OrderTable = async ({ tHead, tBody, actions, query, page }) => {
    const { data, currentPage, totalPages } = await pagination(tBody, page)
    const filteredTBody = await searchForTerm(data, query)

    // return the component
    return (
        <>
            <div className="mt-4 w-full">
                <div className="flex w-full flex-col items-center justify-between space-y-2 sm:flex-row sm:space-y-0">
                    {/* placeholder for search */}
                    <TableSearch terms={tHead} />
                    {/* placeholder for filter */}
                    <TableFilter />
                </div>
            </div>
            <div className="mt-6 overflow-hidden rounded-xl px-6 shadow shadow-base-300 bg-base-200 lg:px-4 w-full overflow-x-auto scrollbar-thin scrollbar-thumb-base-300 scrollbar-track-base-200 scrollbar-rounded-md">
                <table className="min-w-full w-full border-collapse border-spacing-y-2 border-spacing-x-2">
                    <thead className="border-b border-base-300 lg:table-header-group">
                        <tr>
                            {tHead.map((th, idx) => (
                                <th
                                    key={idx}
                                    className="whitespace-normal min-w-36 py-4 text-sm font-semibold text-slate-500 sm:px-3"
                                >
                                    {th}
                                </th>
                            ))}
                            {actions && (<th className="whitespace-normal min-w-36 py-4 text-sm font-semibold text-slate-600 sm:px-3"></th>)}
                        </tr>
                    </thead>
                    <tbody className="bg-base-200 lg:border-base-300">
                        {/* use the filteredTBody instead of tBody to render the table rows */}
                        {filteredTBody?.length > 0
                            ? filteredTBody.map((record, idx) => (
                                <tr key={idx} className="gap-5">
                                    {/* loop through the keys of the order object and render a table cell for each key */}
                                    {Object.keys(record).map((key) => (
                                        <td
                                            key={key}
                                            className="whitespace-no-wrap min-w-36 py-4 text-sm font-normal text-slate-500 sm:px-3 lg:table-cell"
                                        >
                                            {/* if the key is status, render a span with the status color */}
                                            {key === 'status' ? (
                                                <span
                                                    className={`ml-2 mr-3 whitespace-nowrap rounded-full px-2 py-0.5 ${getStatusColor(
                                                        record[key]
                                                    )}`}
                                                >
                                                    {record[key]}
                                                </span>
                                            ) : (
                                                // otherwise, render the value of the key
                                                record[key]
                                            )}
                                        </td>
                                    ))}
                                    {actions && (
                                        <td className="whitespace-no-wrap min-w-36 py-4 gap-2 text-sm font-normal text-slate-500 sm:px-3 lg:table-cell">
                                            <TableActionBtn
                                                actions={actions}
                                                record={record}
                                            />
                                        </td>
                                    )}
                                </tr>
                            ))
                            : (<tr>
                                <td className="whitespace-no-wrap min-w-36 py-4 text-sm font-normal text-base-500 sm:px-3 lg:table-cell">
                                    Aucun enregistrement.
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            <div className="w-full  rounded-xl mt-4 p-2 flex items-centre justify-center">
                <TablePagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                />
            </div>
        </>
    );
};



// define the prop types for the OrderTable component
OrderTable.propTypes = {
    // tHead is an array of strings that represent the table headers
    tHead: PropTypes.arrayOf(PropTypes.string).isRequired,
    // tBody is an array of objects that represent the table rows
    tBody: PropTypes.arrayOf(PropTypes.object).isRequired,

    // action is an optional function that takes an order object as an argument and performs some action on it
    action: PropTypes.arrayOf(PropTypes.object),
};

// export the OrderTable component
export default OrderTable;
