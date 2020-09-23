import React, { useState, useEffect } from "react";
import Table from "../../molecules/Table";
import LeftMenu from "../../molecules/LeftMenu";
import Header from "../../molecules/Header";
import Footer from "../../molecules/Footer";
import MyButton from "../../atoms/Button";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core/styles";
import apiPost from "../../../api/apiPost";
import apiGet from "../../../api/apiGet";
import "./styles/index.scss";
const useStyles = makeStyles((theme) => ({
  button: {
    display: "block",
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const Transaction = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [openSelect, setopenSelect] = useState(false);
  const [currency, setcurrency] = useState("TRY");
  const [name, setname] = useState("");
  const [description, setdescription] = useState("");
  const [date, setdate] = useState("");
  const [amount, setamount] = useState("");
  const [thList, setthList] = useState([]);
  const [resData, setresData] = useState([]);
  const [isUpdate, setisUpdate] = useState(false);
  const [item, setitem] = useState(null);

  useEffect(() => {
    apiGet(`https://5f69d98ad808b90016bc07e0.mockapi.io/api/v1/Transaction`)
      .then((res) => {
        setresData(res);
        const keys = Object.keys(res[0]);
        keys.pop();
        setthList(keys);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [resData]);

  const handleCloseSelect = () => {
    setopenSelect(false);
  };

  const handleOpenSelect = () => {
    setopenSelect(true);
  };
  const handleClickOpen = () => {
    setOpen(true);
    setisUpdate(false);
  };
  const handleChange = (event) => {
    setcurrency(event.target.value);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const addTransaction = () => {
    const body = {
      name,
      description,
      date,
      amount,
      currency,
    };
    if (
      name.trim(" ") === "" ||
      amount.trim(" ") === "" ||
      currency.trim(" ") === ""
    ) {
      alert("Fields marked with an asterisk are required.");
      return;
    }

    apiPost(
      `https://5f69d98ad808b90016bc07e0.mockapi.io/api/v1/Transaction`,
      body,
      "POST"
    )
      .then((res) => {})
      .catch((err) => {
        console.log(err);
      });
    setOpen(false);
    setname("");
    setdescription("");
    setdate("");
    setamount("");
  };
  const deleteItem = (data) => {
    apiGet(
      `https://5f69d98ad808b90016bc07e0.mockapi.io/api/v1/Transaction/${data.id}`,
      "DELETE"
    )
      .then((res) => {})
      .catch((err) => {
        console.log(err);
      });
  };
  const editItem = (data) => {
    const { name, description, date, amount, currency } = data;
    setisUpdate(true);
    setOpen(true);
    setitem(data);
    setname(name);
    setdescription(description);
    setdate(date);
    setamount(amount);
    setcurrency(currency);
  };
  const updateItem = () => {
    const body = {
      name,
      description,
      date,
      amount,
      currency,
    };
    if (
      name.trim(" ") === "" ||
      amount.trim(" ") === "" ||
      currency.trim(" ") === ""
    ) {
      alert("Fields marked with an asterisk are required.");
      return;
    }

    apiPost(
      `https://5f69d98ad808b90016bc07e0.mockapi.io/api/v1/Transaction/${item.id}`,
      body,
      "PUT"
    )
      .then((res) => {})
      .catch((err) => {
        console.log(err);
      });
    setOpen(false);
    setname("");
    setdescription("");
    setdate("");
    setamount("");
  };
  return (
    <div className="container">
      <Header />
      <div className="content">
        <LeftMenu />
        <div className="table-content">
          <div className="btn-transaction">
            <div onClick={() => handleClickOpen()}>
              <MyButton value="New Transaction" />
            </div>
          </div>
          <div>
            <Table
              res={resData}
              th={thList}
              editIconClick={editItem}
              deleteIconClick={deleteItem}
            />
          </div>
        </div>
      </div>
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">New Transaction</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Fields marked with an asterisk are required.
            </DialogContentText>
            <TextField
              required
              autoFocus
              margin="dense"
              id="name"
              label="Name"
              type="string"
              fullWidth
              value={name}
              onChange={(event) => {
                setname(event.target.value);
              }}
            />
            <TextField
              autoFocus
              margin="dense"
              id="description"
              label="Description"
              type="email"
              fullWidth
              value={description}
              onChange={(event) => {
                setdescription(event.target.value);
              }}
            />
            <TextField
              autoFocus
              margin="dense"
              id="date"
              type="date"
              fullWidth
              value={date}
              onChange={(event) => {
                setdate(event.target.value);
              }}
            />
            <TextField
              required
              autoFocus
              margin="dense"
              id="Amount"
              label="Amount"
              type="number"
              fullWidth
              value={amount}
              onChange={(event) => {
                setamount(event.target.value);
              }}
            />
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-controlled-open-select-label">
                Currency *
              </InputLabel>
              <Select
                labelId="demo-controlled-open-select-label"
                id="demo-controlled-open-select"
                open={openSelect}
                value={currency}
                onClose={handleCloseSelect}
                onOpen={handleOpenSelect}
                onChange={handleChange}
                required
              >
                <MenuItem value={"TRY"}>TRY</MenuItem>
                <MenuItem value={"USD"}>USD</MenuItem>
                <MenuItem value={"EURO"}>EURO</MenuItem>
              </Select>
            </FormControl>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            {isUpdate ? (
              <Button onClick={updateItem} color="primary">
                Update
              </Button>
            ) : (
              <Button onClick={addTransaction} color="primary">
                Submit
              </Button>
            )}
          </DialogActions>
        </Dialog>
      </div>
      <Footer />
    </div>
  );
};

export default Transaction;
