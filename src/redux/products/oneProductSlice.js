"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.oneProductReducer = exports.setPriceWithSale = exports.setHolderPrice = exports.setSealingPrice = exports.setQuantityOrders = exports.setSelectedSealing = exports.setSelectedHolder = exports.setPriceOneProduct = exports.setCapacityKey = exports.setPrice = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var productsOperations_1 = require("./productsOperations");
var productsOperations_2 = require("./productsOperations");
var initialState = {
    result: {
        description: '',
        capacity: {},
        capacityKey: '',
        information: '',
        price: '',
        priceOneProduct: '',
        image: [],
    },
    selectedHolder: false,
    selectedSealing: false,
    holderPrice: 0,
    sealingPrice: 0,
    quantityOrders: 1,
    priceWithSale: 0,
    isLoading: false,
    error: null,
};
var oneProductSlice = (0, toolkit_1.createSlice)({
    name: 'products',
    initialState: initialState,
    reducers: {
        setPrice: function (state, action) {
            state.result.price = action.payload;
        },
        setCapacityKey: function (state, action) {
            state.result.capacityKey = action.payload;
        },
        setPriceOneProduct: function (state, action) {
            state.result.priceOneProduct = action.payload;
        },
        setSelectedHolder: function (state, action) {
            state.selectedHolder = action.payload;
        },
        setSelectedSealing: function (state, action) {
            state.selectedSealing = action.payload;
        },
        setQuantityOrders: function (state, action) {
            state.quantityOrders = action.payload;
        },
        setSealingPrice: function (state, action) {
            state.sealingPrice = action.payload;
        },
        setHolderPrice: function (state, action) {
            state.holderPrice = action.payload;
        },
        setPriceWithSale: function (state, action) {
            state.priceWithSale = Math.round(action.payload);
        },
    },
    extraReducers: function (builder) {
        return builder
            .addCase(productsOperations_1.getOneProduct.pending, function (state) {
            state.isLoading = true;
        })
            .addCase(productsOperations_1.getOneProduct.fulfilled, function (state, action) {
            state.isLoading = false;
            state.error = null;
            state.result = action.payload.result;
            state.result.priceOneProduct = action.payload.result.price;
        })
            .addCase(productsOperations_1.getOneProduct.rejected, function (state, action) {
            var _a;
            state.isLoading = false;
            state.error = (_a = action.payload) !== null && _a !== void 0 ? _a : 'Unknown error';
        })
            .addCase(productsOperations_2.addProduct.pending, function (state) {
            state.isLoading = true;
        })
            .addCase(productsOperations_2.addProduct.fulfilled, function (state) {
            state.isLoading = false;
            state.error = null;
        })
            .addCase(productsOperations_2.addProduct.rejected, function (state, action) {
            var _a;
            state.isLoading = false;
            state.error = (_a = action.payload) !== null && _a !== void 0 ? _a : 'Unknown error';
        })
            .addCase(productsOperations_2.addProductZbirky.pending, function (state) {
            state.isLoading = true;
        })
            .addCase(productsOperations_2.addProductZbirky.fulfilled, function (state) {
            state.isLoading = false;
            state.error = null;
        })
            .addCase(productsOperations_2.addProductZbirky.rejected, function (state, action) {
            var _a;
            state.isLoading = false;
            state.error = (_a = action.payload) !== null && _a !== void 0 ? _a : 'Unknown error';
        });
    },
});
exports.setPrice = (_a = oneProductSlice.actions, _a.setPrice), exports.setCapacityKey = _a.setCapacityKey, exports.setPriceOneProduct = _a.setPriceOneProduct, exports.setSelectedHolder = _a.setSelectedHolder, exports.setSelectedSealing = _a.setSelectedSealing, exports.setQuantityOrders = _a.setQuantityOrders, exports.setSealingPrice = _a.setSealingPrice, exports.setHolderPrice = _a.setHolderPrice, exports.setPriceWithSale = _a.setPriceWithSale;
exports.oneProductReducer = oneProductSlice.reducer;
