use AbhishekNew;



create procedure UpdateRecord(@Product_id int, @product_name varchar(40),@product_price int , @Category_id int,@pid int)
AS
begin
update Products set  Product_id = @Product_id , Product_name = @product_name , Product_price =@product_price,Category_id = @Category_id where Pid = @pid;
end


delete from Products where Product_id = 3;



create procedure GetProductById(@Pid int)
as
begin
	select * from Products where  Pid= @Pid;
end


create procedure DeleteRecords(@pid int)
as 
begin
	delete from Products where Pid=@pid;
end


select * from Categories;
select * from Products;

insert into Categories(Category_id,Category_name,Category_price) values(3,'category3',123);

update Products set Category_id =2 where Product_id=2;


alter table categories add  Product_id int;


update Categories set product_id= 1 where cid= 1;



create procedure JoinsLeft
as 
begin
	SELECT *
	FROM Products
	LEFT JOIN Categories ON Products.Product_id= Categories.Category_id;
end


SELECT *
	FROM Products
	LEFT JOIN Categories ON Products.Product_id= Categories.Category_id;