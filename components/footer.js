const footer =()=>{
    return `  <div id="subscribediv">
    <label for="subscriber">SUBSCRIBE</label>
    <input type="text" name="subscriber" placeholder="Enter Your Mail">
    <button>Subscribe</button>
    <div style="display: flex; gap: 3px;"><input type="checkbox" name="ch" value="sub">
        <label for="ch"> By checking this box I am opting in to marketing messages
            from Earty Majority,</label><br>
    </div>
</div>
<div id="info">
    <div id="Compny">
        <h3>COMPANY</h3>
        <p>About us</p>
        <p>Be an ambassador</p>
        <p>Team</p>
        <p>Board selector</p>
    </div>
    <div>
        <h3>SUPPORT</h3>
        <p>Shipping and delivery</p>
        <p>Return</p>
        <p>FAQ</p>
        <p>Size quide</p>
    </div>
    <div>
        <h3>INFO</h3>
        <p>Terms of cervice</p>
        <p>Privecy</p>
        <p>What the FAQ</p>
        <p>Contect Us</p>
    </div>
    <div style="margin-left: 8%;" id="FOLLOW">
        <h3>FOLLOW US</h3>
        <a href="https://twitter.com/i/flow/login">Twitter</a>
        <a href="https://www.facebook.com/">Facebook</a>
        <a href="https://www.instagram.com/accounts/login/">Instagram</a>
    </div>
</div>`
}
export default footer