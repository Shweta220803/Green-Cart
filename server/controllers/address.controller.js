import Address from "../models/address.model.js";

// Add new address: add/address/add
export const addAddress = async (req, res) => {
  try {
    const { address } = req.body;

    await Address.create({ ...address, userId: req.userId });

    res
      .status(201)
      .json({ success: true, message: "Address added successfully" });
  } catch (error) {
    console.log(error.message);

    res.status(500).json({ success: false, message: error.message });
  }
};

// Get all addresses by userId
export const getAddress = async (req, res) => {
  try {
    const addresses = await Address.find({ userId: req.userId });

    res.status(200).json({ success: true, addresses });
  } catch (error) {
    console.log(error);

    res.status(500).json({ success: false, message: error.message });
  }
};
