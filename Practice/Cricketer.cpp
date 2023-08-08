#include<iostream>
using namespace std;
 class Cricketer
{

};
class Batsman :public  Cricketer {

    int total_runs =0;
    int average_runs=0;
    int best_performance=0;
    int Number_of_Matches=0;

    public:
    void SetTotalRuns(int total_runs)
    {
        this->total_runs =  total_runs;
    }
    public:
    int Gettotal_runs()
    {
        return total_runs; 
    }
    public:
    void Setaverage_runs(int average_runs)
    {
        this->average_runs = average_runs;
    }
    public:
    int  Getaverage_runs()
    {
        return average_runs;
    }
    public:
    void Setbest_performance(int best_performance)
    {
        this->best_performance  = best_performance;
    }
    public:
    int  Getbest_performance()
    {
        return best_performance;
    }
    public:
    void SetNumber_of_Matches(int Number_of_Matches)
    {
        this->Number_of_Matches =Number_of_Matches;
    }
    public:
    int GetNumber_of_Matches()
    {
        return Number_of_Matches;
    }

    public:
    void Inputdata( int total_runs ,int best_performance, int Number_of_Matches)
    {
        this->total_runs = total_runs;
        this->best_performance = best_performance;
        this->Number_of_Matches = Number_of_Matches;
    }
    public:
    void   CalculateAverage()
    {
       average_runs = total_runs/Number_of_Matches;
       

    }
    public:
    void Display()
    {
        cout<<"total runs: \n"<<total_runs<<"\n";
        cout<<"Average runs :\n"<<average_runs<<"\n";
        cout<<"best performance :\n"<<best_performance<<"\n";
        cout<<"number of Matches :\n"<<Number_of_Matches<<"\n";
    }
    


};
int main()
{
    Batsman b1;
    cout<<"total runs ";
    b1.SetTotalRuns(100);
    b1.Setbest_performance(100);
    b1.SetNumber_of_Matches(5);




    

}