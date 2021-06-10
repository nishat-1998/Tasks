import React, { useState } from "react";
import "./TabelData.css";
const TabelData = () => {
	const [dataSet, setDataSet] = useState([
		{
			moduleName: "Configuration",
		    activityName: "Item Category",
			isCreate: false,
			isView: false,
			isEdit: false,
			isDelete: false,
			isApprove: false,
		},
		{
			moduleName: "Configuration",
			activityName: "item",
			isCreate: false,
			isView: false,
			isEdit: false,
			isDelete: false,
			isApprove: false,
		},
		{
			moduleName: "Configuration",
			activityName: "Item 2",
			isCreate: false,
			isView: false,
			isEdit: false,
			isDelete: false,
			isApprove: false,
		},
		{
			moduleName: "Watch",
			activityName: "Item 4",
			isCreate: false,
			isView: false,
			isEdit: false,
			isDelete: false,
			isApprove: false,
		},
		{
			moduleName: "Tv",
			activityName: "item 5",
			isCreate: false,
			isView: false,
			isEdit: false,
			isDelete: false,
			isApprove: false,
		},
		{
			moduleName: "Phone",
			activityName: "item 6",
			isCreate: false,
			isView: false,
			isEdit: false,
			isDelete: false,
			isApprove: false,
		},
		{
			moduleName: "Computer",
			activityName: "item 7",
			isCreate: false,
			isView: false,
			isEdit: false,
			isDelete: false,
			isApprove: false,
		},
		{
			moduleName: "Tablet",
			activityName: "item 8",
			isCreate: false,
			isView: false,
			isEdit: false,
			isDelete: false,
			isApprove: false,
		},
	]);



	//  checkBox

	const handleCheckBox = (name, e) => {
		let newData = [];
		dataSet.forEach((data) => {
			if (data.activityName === name) {
				const newItem = { ...data };
				newItem[e.target.name] = e.target.checked;
				newData.push(newItem);
			} else {
				newData.push(data);
			}
		});
		setDataSet(newData);
	};

	return (
		<div>
			<h2 className="Header">Tabel</h2>
			<table>
				<tbody>
					<tr>
						<th>Module Name</th>
						<th>Activity Name</th>
						<th>Create</th>
						<th>View</th>
						<th>Edit</th>
						<th>Delete</th>
						<th>Approve</th>
					</tr>
					{dataSet.map((item) => (
						<tr>
							<td>{item.moduleName}</td>
							<td>{item.activityName}</td>
							<td>
								<input
									type="checkbox"
									name="isCreate"
									checked={
										item.isCreate
									}
									onChange={(e) =>
										handleCheckBox(
											item.activityName,
											e
										)
									}
								/>
							</td>
							<td>
								<input
									type="checkbox"
									name="isView"
									checked={
										item.isView
									}
									onChange={(e) =>
										handleCheckBox(
											item.activityName,
											e
										)
									}
								/>
							</td>
							<td>
								<input
									type="checkbox"
									name="isEdit"
									checked={
										item.isEdit
									}
									onChange={(e) =>
										handleCheckBox(
											item.activityName,
											e
										)
									}
								/>
							</td>
							<td>
								<input
									type="checkbox"
									name="isDelete"
									checked={
										item.isDelete
									}
									onChange={(e) =>
										handleCheckBox(
											item.activityName,
											e
										)
									}
								/>
							</td>
							<td>
								<input
									type="checkbox"
									name="isApprove"
									checked={
										item.isApprove
									}
									onChange={(e) =>
										handleCheckBox(
											item.activityName,
											e
										)
									}
								/>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default TabelData;