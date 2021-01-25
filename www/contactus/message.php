<h1>online message</h1>

<form action="/plus/diy.php" method="post" name="myform" enctype="multipart/form-data">
<input type="hidden" name="action" value="post" />
<input type="hidden" name="diyid" value="1" />
<input type="hidden" name="do" value="2" />
name: *<label><input type="text" name="name"></label>
skype: *<label><input type="text" name="skype"></label>
company: <label><input type="text" name="company"></label>
website: <label><input type="text" name="website"></label><br>
email: *<label><input type="text" name="email"></label>
mobile: *<label><input type="text" name="mobile"></label>
qq: <label><input type="text" name="qq"></label>
wechat: <label><input type="text" name="wechat"></label><br>
write message: *<br>
<label><textarea name="content"></textarea></label><br>
<input type="button" value="submit" onClick="return tijiao(this.form);">     <input type="reset" value="reset">
<input type="hidden" name="dede_fields" value="name,text;skype,text;company,text;website,text;mobile,text;qq,text;wechat,text;text;content,multitext" />
<input type="hidden" name="dede_fieldshash" value="0707806cb1ea670704857c2b09605feb" /></form>

<script src="/scripts/feedback/message.js"></script>