import auth from './auth'
import db from './db'
import payments from './payments'

export default {
  init: auth.init,

  signUp: auth.signUp,
  signIn: auth.signIn,
  signOut: auth.signOut,
  updateUser: auth.updateUser,
  deleteUser: auth.deleteUser,
  forgotPassword: auth.forgotPassword,

  openDatabase: db.openDatabase,
  getDatabases: db.getDatabases,

  insertItem: db.insertItem,
  updateItem: db.updateItem,
  deleteItem: db.deleteItem,
  putTransaction: db.putTransaction,

  purchaseSubscription: payments.purchaseSubscription,
  cancelSubscription: payments.cancelSubscription,
  resumeSubscription: payments.resumeSubscription,
  updatePaymentMethod: payments.updatePaymentMethod,
}
