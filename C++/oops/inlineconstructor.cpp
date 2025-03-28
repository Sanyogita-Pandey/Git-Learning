#include<iostream>

using namespace std;
 class Customer{
    string name;
    int account_number;
    int amount;

public:
Customer(){
    name = "Mohit";
    account_number = 12;
    amount = 100;
}

inline Customer(string a, int b, int c): name(a), account_number(b), amount(c){

}
 void display(){
    cout<<name<<" "<<account_number<<" "<<amount<<endl;

 }

 //copy constructor
 Customer(Customer &B){

    name = B.name;
    account_number = B.account_number;
 }
 
};
 int main(){
    Customer A1;
    Customer A2("Rohit", 23, 400);
    A2.display();

    A1.display();
    Customer A3(A2);
   A3.display();

   //asssignment operator
   A1= A2;
   A1.display();
 }