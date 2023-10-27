import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	fullName: "",
	nationlId: "",
	createdAt: "",
};

const customerSlice = createSlice({
	name: "customer",
	initialState,
	reducers: {
		createCustomer: {
			prepare(fullName, nationalId) {
				return {
					payload: {
						fullName,
						nationalId,
						createdAt: new Date().toISOString(),
					},
				};
			},

			reducer(state, action) {
				state.fullName = action.payload.fullName;
				state.nationlId = action.payload.nationlId;
				state.createdAt = action.payload.createdAt;
			},
		},
		updateName(state, action) {
			state.fullName = action.payload;
		},
	},
});

export const { createCustomer, updateName } = customerSlice.actions;

export default customerSlice.reducer;

/*
export default function customerReducer(state = initialState, action) {
	switch (action.type) {
		case "customer/createCustomer":
			return {
				...state,
				fullName: action.payload.fullName,
				nationlId: action.payload.nationlId,
				createdAt: action.payload.createdAt,
			};
		case "customer/updateName":
			return { ...state, fullName: action.payload };
		default:
			return state;
	}
}

export function createCustomer(fullName, nationlId) {
	return {
		type: "customer/createCustomer",
		payload: { fullName, nationlId, createdAt: new Date().toISOString() },
	};
}

export function updateName(fullName) {
	return { type: "customer/updateName", payload: fullName };
}
*/
