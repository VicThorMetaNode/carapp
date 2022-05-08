




function FormCustom() {
  

  return (
    <form className="fom-form"  action="/send-data-here" method="post">
    <input className="form-mail" placeholder="MAIL" type="text" id="email" name="email" required />
    </form>
  )
}

export default FormCustom